---
layout: page
title: Selected Projects
title_zh: 精选项目
permalink: /projects/
---

<ul class="project-list">
{% for project in site.data.projects %}
  <li class="project-card">
    <h3 data-i18n="en">{{ project.title }}{% if project.status != "" %} <span class="meta">({{ project.status }})</span>{% endif %}</h3>
    <h3 data-i18n="zh">{{ project.title_zh | default: project.title }}{% if project.status_zh != "" %} <span class="meta">（{{ project.status_zh }}）</span>{% endif %}</h3>
    <p data-i18n="en">{{ project.description }}</p>
    <p data-i18n="zh">{{ project.description_zh | default: project.description }}</p>
    <span class="meta" data-i18n="en">{{ project.tech }}{% if project.repo != "" %} · <a href="{{ project.repo }}">Repo</a>{% endif %}{% if project.demo != "" %} / <a href="{{ project.demo }}">Demo</a>{% endif %}{% if project.report != "" %} / <a href="{{ project.report }}">Report</a>{% endif %}</span>
    <span class="meta" data-i18n="zh">{{ project.tech }}{% if project.repo != "" %} · <a href="{{ project.repo }}">代码库</a>{% endif %}{% if project.demo != "" %} / <a href="{{ project.demo }}">演示</a>{% endif %}{% if project.report != "" %} / <a href="{{ project.report }}">报告</a>{% endif %}</span>
  </li>
{% endfor %}
</ul>
