---
layout: default
redirect_from: "/index.php/"
---
<div class="frontcontainer row">
    <div class="col m12 l9 section">

      <div class="banner card-panel white-text">
        <div style="font-size: 50px; margin-top: -10px">OMNeT++</div>
        <div style="font-size: 20px; margin-top: -15px">Discrete Event Simulator</div>
        <div style="width: 60%; margin: 20px 0px">OMNeT++ is an extensible, modular, component-based C++ simulation library and framework, primarily for building network simulators.</div>
        {% include featured-projects-card.html %}
      </div>

      <div class="news content">
        {% assign counter = '' %}
        {% for post in site.posts %}
        {% if counter.size < 5 %}
        <div class="news-item">
          {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
          <div class="post-header">
            <div class="title">{{ post.title | escape }}</div>
            <div><time><i class="far fa-calendar-alt"></i>&nbsp;{{ post.date | date: date_format }}</time></div>
          </div>

          {% if post.excerpt != post.content %}
            <div>
            {{ post.excerpt }}
            </div>
            <a class="btn-small waves-effect grey lighten-2 black-text" href="{{ post.url | relative_url }}">Read more</a>
          {% else %}
            {{ post.content }}
          {% endif %}
          {% capture counter %}{{ counter | append:'.' }}{% endcapture %}
        </div>
        {% endif %}
        {% endfor %}
      </div>
      <a class="btn-small waves-effect grey lighten-2 black-text right" href="posts">Archived News</a>
    </div>
    <!-- Side box column -->
    <div class="col m12 l3">
      <div class="section">
        <a href="/intro" id="start-button" style="width: 100%; margin: 8px 0 8px 0px;" class="btn-large waves-effect waves-light omnetpp-blue accent-4">Get Started</a>
        <a href="/download" id="download-button" style="width: 100%; margin: 8px 0 8px 0px;" class="btn-large waves-effect waves-light green darken-3">Download</a>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">GitHub Repository</span>
            <p>OMNeT++ source code and development history:<br/>
            <i class="fab fa-github"></i>&nbsp;<a href="https://github.com/omnetpp/omnetpp" target="_blank">omnetpp/omnetpp</a>
            </p>
          </div>
        </div>

        <div class="card omnetpp-blue lighten-1">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">Keeping Up to Date</span>
            <p>We regularly post on Twitter.</p>
            <i class="fab fa-twitter"></i>&nbsp;<a href="https://twitter.com/omnetpp" target="_blank">Follow us there.</a>
          </div>
        </div>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">Tips for New Users</span>
            <p>Check out the&nbsp;<a href="https://docs.omnetpp.org/tutorials/tictoc/" target="_blank">TicToc tutorial</a>,
              browse the <a href="/documentation">documentation</a> and the <a href="/download/models-and-tools">model catalog</a>.
              Watch <a href="http://www.youtube.com/view_play_list?p=EDBBAEA836A0A89E" target="_blank">introductory
              videos</a>, and explore the featured network simulation projects (see banner).</p>
          </div>
        </div>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">Asking Questions</span>
            <p>If you have OMNeT++ related programming questions (or want to help other members of the community),
              visit <a href="https://stackoverflow.com/questions/tagged/omnet%2b%2b" target="_blank">stackoverflow</a>
              and use the [omnet++] tag.</p>
          </div>
        </div>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">Mailing List</span>
            <p><strong>Announcements:</strong><br><em><i class="fas fa-envelope"></i>&nbsp;omnetpp-announcements</em><br>
              <a href="https://groups.google.com/forum/#!forum/omnetpp-announcements/join" target="_blank">Subscribe</a> &nbsp;/&nbsp;
              <a href="mailto:omnetpp-announcements@googlegroups.com">Email</a> &nbsp;/&nbsp;
              <a href="https://groups.google.com/forum/#!forum/omnetpp-announcements" target="_blank">Web</a></p>
            <p><strong>Discussion:<br></strong><em><i class="fas fa-envelope"></i>&nbsp;omnetpp</em><br>
              <a href="https://groups.google.com/forum/#!forum/omnetpp/join" target="_blank">Subscribe</a>
              &nbsp;/&nbsp;<a href="mailto:omnetpp@googlegroups.com">Email</a>
              &nbsp;/&nbsp;<a href="https://groups.google.com/forum/#!forum/omnetpp" target="_blank">Web</a></p>
          </div>
        </div>

      </div>
    </div>
</div>

