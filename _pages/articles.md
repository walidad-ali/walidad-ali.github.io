---
layout: archive
title: "Knowledge Base"
permalink: /articles/
author_profile: false
classes: wide
---

Welcome to the knowledge base.

{% for post in site.articles %}
  [{{ post.title }}]({{ post.url | relative_url }})
  *{{ post.date | date: "%B %d, %y" }}* — {{ post.excerpt | strip_html | truncate: 160 }}
{% endfor %}
