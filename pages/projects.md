---
layout: page
title: Selected Projects
permalink: /projects/
---

<ul class="project-list">
{% for project in site.data.projects %}
  <li class="project-card">
    <h3>{{ project.title }}{% if project.status != "" %} <span class="meta">({{ project.status }})</span>{% endif %}</h3>
    <p>{{ project.description }}</p>
    <span class="meta">{{ project.tech }}{% if project.repo != "" %} · <a href="{{ project.repo }}">Repo</a>{% endif %}{% if project.demo != "" %} / <a href="{{ project.demo }}">Demo</a>{% endif %}</span>
  </li>
{% endfor %}
</ul>
