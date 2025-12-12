---
layout: default
title: "Articles"
permalink: /articles/
---

# Articles

<ul>
{% for a in site.collections.articles.docs %}
  <li>
    <a href="{{ a.url }}">{{ a.title }}</a>
    {% if a.date %} — {{ a.date | date: "%b %d, %Y" }}{% endif %}
  </li>
{% endfor %}
</ul>
