---
layout: default
title: "Articles"
permalink: /articles/
---

# Articles

{% if site.articles and site.articles.size > 0 %}

  {% assign docs = site.articles | sort: "date" | reverse %}

  {% for a in docs %}
    <article class="article-card">
      <h3>
        <a href="{{ a.url | relative_url }}">{{ a.title }}</a>
      </h3>
      <div class="meta">
        {{ a.date | date: "%b %d, %Y" }}
        {% if a.author %} • {{ a.author }}{% endif %}
      </div>
      <p class="article-excerpt">
        {{ a.excerpt | default: a.content | strip_html | strip_newlines | truncate: 240 }}
      </p>
    </article>
  {% endfor %}

{% else %}

  <p>No articles found. Make sure:</p>
  <ul>
    <li>Your articles are inside <code>_articles/</code></li>
    <li>Each article has valid YAML front matter</li>
    <li>Your collection is defined in <code>_config.yml</code></li>
  </ul>

{% endif %}
