---
layout: single
title: "Tax Knowledge Base"
permalink: /knowledge-base/
author_profile: false
classes: wide
---

Welcome to the Tax Knowledge Base. We combine deep statutory analysis with real-world case results to provide a comprehensive look at IRS collection defense.

<div class="notice--primary" style="background: #f2f6f9; border-left: 5px solid #2a5a8a; padding: 1.5em; margin-bottom: 2em;">
  <h2 style="margin-top: 0;"><i class="fas fa-book-open"></i> Technical Guides & Analysis</h2>
  <p>In-depth breakdowns of the Internal Revenue Code (IRC), Treasury Regulations, and the Internal Revenue Manual (IRM).</p>
  <div class="entries-list">
    {% for post in site.knowledge_base %}
      {% include archive-single.html type="list" %}
    {% endfor %}
  </div>
</div>

<div class="notice--success" style="background: #f0f9f0; border-left: 5px solid #28a745; padding: 1.5em;">
  <h2 style="margin-top: 0;"><i class="fas fa-trophy"></i> IRS Wins & Case Studies</h2>
  <p>Real-world Offer in Compromise (OIC) settlements and tax resolution success stories.</p>
  <div class="entries-list">
    {% for post in site.case_studies %}
      {% include archive-single.html type="list" %}
    {% endfor %}
  </div>
</div>
