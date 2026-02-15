(function () {
  'use strict';

  var searchData = null;
  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('local-search-input');
  var resultContainer = document.getElementById('local-search-result');
  var closeBtn = document.getElementById('search-overlay-close');

  function openSearch() {
    overlay.classList.add('active');
    input.value = '';
    resultContainer.innerHTML = '';
    setTimeout(function () { input.focus(); }, 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.search-trigger').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openSearch();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSearch);
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });

  function fetchSearchData(callback) {
    if (searchData) {
      callback(searchData);
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/search.xml', true);
    xhr.onload = function () {
      if (xhr.status !== 200) return;
      var xml = xhr.responseXML;
      if (!xml) return;
      var entries = xml.querySelectorAll('entry');
      var data = [];
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        var title = entry.querySelector('title') ? entry.querySelector('title').textContent.trim() : '';
        var url = entry.querySelector('url') ? entry.querySelector('url').textContent.trim() : '';
        var content = entry.querySelector('content') ? entry.querySelector('content').textContent.trim() : '';
        var categories = [];
        var catNodes = entry.querySelectorAll('category');
        for (var j = 0; j < catNodes.length; j++) {
          categories.push(catNodes[j].textContent.trim());
        }
        data.push({ title: title, url: url, content: content, categories: categories });
      }
      searchData = data;
      callback(data);
    };
    xhr.send();
  }

  function stripHtml(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    var escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(' + escaped + ')', 'gi');
    return text.replace(re, '<mark class="search-keyword">$1</mark>');
  }

  function getContextSnippet(content, keyword, contextLen) {
    contextLen = contextLen || 80;
    var lower = content.toLowerCase();
    var idx = lower.indexOf(keyword.toLowerCase());
    if (idx === -1) return content.substring(0, 200);
    var start = Math.max(0, idx - contextLen);
    var end = Math.min(content.length, idx + keyword.length + contextLen);
    var snippet = '';
    if (start > 0) snippet += '...';
    snippet += content.substring(start, end);
    if (end < content.length) snippet += '...';
    return snippet;
  }

  function doSearch(keywords) {
    if (!keywords || !keywords.trim()) {
      resultContainer.innerHTML = '<div class="search-empty">输入关键词搜索文章</div>';
      return;
    }

    var query = keywords.trim().toLowerCase();
    var queryWords = query.split(/\s+/);

    fetchSearchData(function (data) {
      var results = [];
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var titleLower = item.title.toLowerCase();
        var plainContent = stripHtml(item.content);
        var contentLower = plainContent.toLowerCase();

        var titleScore = 0;
        var contentScore = 0;
        var allMatch = true;
        for (var w = 0; w < queryWords.length; w++) {
          var word = queryWords[w];
          var tIdx = titleLower.indexOf(word);
          var cIdx = contentLower.indexOf(word);
          if (tIdx === -1 && cIdx === -1) {
            allMatch = false;
            break;
          }
          if (tIdx !== -1) titleScore += 10;
          if (cIdx !== -1) contentScore += 1;
        }

        if (allMatch) {
          results.push({
            item: item,
            plainContent: plainContent,
            score: titleScore + contentScore
          });
        }
      }

      results.sort(function (a, b) { return b.score - a.score; });

      if (results.length === 0) {
        resultContainer.innerHTML = '<div class="search-empty">没有找到相关文章</div>';
        return;
      }

      var html = '<ul class="search-result-list">';
      var limit = Math.min(results.length, 20);
      for (var r = 0; r < limit; r++) {
        var res = results[r];
        var titleHtml = res.item.title;
        var snippetText = getContextSnippet(res.plainContent, queryWords[0], 80);

        for (var k = 0; k < queryWords.length; k++) {
          titleHtml = highlightKeyword(titleHtml, queryWords[k]);
          snippetText = highlightKeyword(snippetText, queryWords[k]);
        }

        var catHtml = '';
        if (res.item.categories.length > 0) {
          catHtml = '<span class="search-result-cat">' + res.item.categories.join(' / ') + '</span>';
        }

        html += '<li class="search-result-item">'
          + '<a href="' + res.item.url + '" class="search-result-link">'
          + '<span class="search-result-title">' + titleHtml + '</span>'
          + catHtml
          + '<p class="search-result-snippet">' + snippetText + '</p>'
          + '</a></li>';
      }
      html += '</ul>';

      if (results.length > limit) {
        html += '<div class="search-more">还有 ' + (results.length - limit) + ' 条结果未显示</div>';
      }

      resultContainer.innerHTML = html;
    });
  }

  var debounceTimer = null;
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      doSearch(input.value);
    }, 300);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearTimeout(debounceTimer);
      doSearch(input.value);
    }
  });
})();
