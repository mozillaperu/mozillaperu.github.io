---
layout: fluid
title: "@FirefoxDevTool tips"
permalink: /devtools-tips
---

<div class="jumbotron jumbotron-fluid">
    <div class="container">
        <div class="d-flex align-items-center flex-column flex-md-row">
            <img src="{{ site.url }}/assets/images/mozilla/logo-developer-quantum.png" height="180"
                 alt="Logo de Firefox Quantum Developer Edition">
            <div class="p-2">
                <h1 class="text-dark">Firefox Quantum: edición para desarrolladores</h1>
                <p class="lead text-primary">Crea y perfecciona tus páginas web con Firefox DevTools</p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="card-columns">
        {% assign devtool_tips = site.devtools_tips | reverse %}
        {% for tip_page in devtool_tips %}
            <div class="card bg-light border-{% cycle 'primary', 'secondary', 'success', 'info', 'warning', 'danger' %}">
                {% if tip_page.image %}
                    <img class="card-img" src="{{ tip_page.image }}">
                {% else if tip_page.video %}
                    <video class="card-img" src="{{ tip_page.video }}" preload></video>
                {% endif %}
                <div class="card-body">
                    <p class="card-text">
                        {{ tip_page.excerpt }}
                    </p>
                    <div class="text-right">
                        <a href="{{ tip_page.url }}" class="card-link">
                            Ver tip <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
</div>
