---
layout: page
title: Skills
permalink: /skills/
---

<ul class="skills-list">
{% for category in site.data.skills.categories %}
  <li><strong>{{ category.name }}:</strong> {{ category.items | join: ", " }}</li>
{% endfor %}
</ul>
