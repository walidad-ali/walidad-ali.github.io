---
layout: single
title: "Tax Knowledge Base"
permalink: /knowledge-base/
author_profile: false
classes: wide
---

<div class="notice--primary" style="background: #f2f6f9; border-left: 5px solid #2a5a8a; padding: 1.5em; margin-bottom: 2em;">
  <h2 style="margin-top: 0;"><i class="fas fa-book-open"></i> Technical Guides & Analysis</h2>
  <div class="entries-list">
    {% for post in site.knowledge_base %}
      {% include archive-single.html type="list" %}
    {% endfor %}
  </div>
</div>

<div class="notice--success" style="background: #f0f9f0; border-left: 5px solid #28a745; padding: 1.5em;">
  <h2 style="margin-top: 0;"><i class="fas fa-trophy"></i> IRS Wins & Case Studies</h2>
  <div class="entries-list">
    {% for post in site.case_studies %}
      {% include archive-single.html type="list" %}
    {% endfor %}
  </div>
</div>
