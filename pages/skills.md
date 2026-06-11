---
layout: page
title: Skills & Toolkit
title_zh: 技能与工具
permalink: /skills/
---

<ul class="skills-list">
{% for category in site.data.skills.categories %}
  <li>
    <span data-i18n="en"><strong>{{ category.name }}:</strong> {{ category.items | join: ", " }}</span>
    <span data-i18n="zh"><strong>{{ category.name_zh }}：</strong>{{ category.items_zh | join: "、" }}</span>
  </li>
{% endfor %}
</ul>
