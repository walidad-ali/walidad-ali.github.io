---
layout: default
title: "Articles"
permalink: /articles/
---

# Articles

{% assign docs = site.collections.articles.docs | sort: 'date' | reverse %}

{% if docs == empty %}
  <p>No articles found. Make sure your files are in <code>_articles/</code> and include valid YAML front-matter.</p>
{% endif %}

{% for a in docs %}
  <article class="article-card">
    <h3><a href="{{ a.url | relative_url }}">{{ a.title }}</a></h3>
    <div class="meta">{{ a.date | date: "%b %d, %Y" }}{% if a.author %} • {{ a.author }}{% endif %}</div>
    <p class="article-excerpt">{{ a.excerpt | default: a.content | strip_html | strip_newlines | truncate: 240 }}</p>
  </article>
{% endfor %}
