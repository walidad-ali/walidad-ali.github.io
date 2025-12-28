---
layout: single
title: "Tax Knowledge Base"
permalink: /articles/
author_profile: true
classes: wide
---

Practical guides, legal analysis, and case studies regarding IRS collection defense and the Offer in Compromise program.

<div class="entries-list">
  {% assign all_content = site.articles | concat: site.case_studies | sort: 'date' | reverse %}
  {% for post in all_content %}
    {% include archive-single.html type="list" %}
  {% endfor %}
</div>
