---
layout: default
title: "Walidad Knowledge Base"
description: "Practical guides and explanations about tax and IRS topics."
---


# Welcome to Walidad Knowledge Base


Use the search box below to find articles.


<input id="searchbox" placeholder="Search the docs..." />
<div id="searchresults"></div>




## Recent Articles


<ul>
{% for a in site.collections.articles.docs limit:10 %}
<li><a href="{{ a.url }}">{{ a.title }}</a> — {{ a.date | date: "%b %d, %Y" }}</li>
{% endfor %}
</ul>
