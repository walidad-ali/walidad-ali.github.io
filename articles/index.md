---
layout: default
title: "Articles"
permalink: /articles/
---

# Articles

{%- comment -%}
  Defensive handling:
  - site.collections.articles may be nil on some builds/configs.
  - If present, sort by date (newest first). Otherwise show helpful message.
{%- endcomment -%}

{%- assign raw_docs = site.collections.articles.docs | default: empty -%}

{%- if raw_docs != empty -%}
  {%- assign docs = raw_docs | sort: "date" | reverse -%}

  {% for a in docs %}
    <article class="article-card">
      <h3><a href="{{ a.url | relative_url }}">{{ a.title }}</a></h3>
      <div class="meta">{{ a.date | date: "%b %d, %Y" }}{% if a.author %} • {{ a.author }}{% endif %}</div>
      <p class="article-excerpt">{{ a.excerpt | default: a.content | strip_html | strip_newlines | truncate: 240 }}</p>
    </article>
  {% endfor %}

{%- else -%}
  <p>No articles found. Make sure:</p>
  <ul>
    <li>Your articles are in the <code>_articles/</code> folder (leading underscore).</li>
    <li>Each article has valid YAML front-matter (a top <code>---</code> block with <code>title</code> and <code>date</code>).</li>
    <li>Your <code>_config.yml</code> defines the collection:
      <pre><code>collections:
  articles:
    output: true
    permalink: /:collection/:path/</code></pre>
    </li>
  </ul>
{%- endif -%}
