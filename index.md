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
            <div class="post-meta">
              <time><i class="far fa-calendar-alt"></i>&nbsp;{{ post.date | date: date_format }}</time>
              {% if post.author %}
                • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{ post.author }}</span></span>
              {% endif %}
            </div>
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
            <span class="card-title">Staying Informed</span>
            <!--
              <p><i class="fab fa-twitter"></i>&nbsp;<a href="https://twitter.com/omnetpp" target="_blank">Follow us on Twitter.</a></p>
            -->
            <p><i class="fab fa-youtube"></i>&nbsp;<a href="https://www.youtube.com/channel/UCgLf7rEm3MJiBOC7CiQeZJQ" target="_blank">Subscribe to our channel.</a></p>
            <p><i class="fab fa-github"></i>&nbsp;<a href="https://github.com/omnetpp/omnetpp" target="_blank">Star the project on GitHub.</a></p>
            <p><i class="fas fa-envelope"></i>&nbsp;omnetpp-announcements<br>
              <a href="https://groups.google.com/forum/#!forum/omnetpp-announcements/join" target="_blank">Subscribe</a> &nbsp;/&nbsp;
              <a href="https://groups.google.com/forum/#!forum/omnetpp-announcements" target="_blank">Web</a></p>
          </div>
        </div>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">Tips for New Users</span>
            <p>Check out the&nbsp;<a href="https://docs.omnetpp.org/tutorials/tictoc/" target="_blank">TicToc tutorial</a>,
              browse the <a href="/documentation">documentation</a> and the <a href="/download/models-and-tools">model catalog</a>.
              Watch <a href="https://www.youtube.com/playlist?list=PL6XXfMqxC2Ccoot_Sl6ZIMjFon4e9ifd3" target="_blank">introductory
              videos</a>, and explore the featured network simulation projects (see banner).</p>
          </div>
        </div>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">Asking Questions</span>
            <p><i class="fab fa-stack-overflow"></i>&nbsp;<strong>StackOverflow</strong></p>
              <p>Use the <a href="https://stackoverflow.com/questions/tagged/omnet%2b%2b" target="_blank"><b>omnet++</b></a> tag.</p>
              <small><p>For OMNeT++-related programming questions.</p></small>
            <p><i class="fas fa-comments"></i>&nbsp;<strong>OMNeT++ Forum</strong></p>
              <p>Visit the <a href="https://forum.omnetpp.org" target="_blank"><b>OMNeT++ Forum</b></a>.</p>
              <small><p>For generic discussion, asking for help, etc.</p></small>
            
            <p><i class="fas fa-envelope"></i>&nbsp;<strong>Mailing list</strong></p>
              <p><a href="https://groups.google.com/forum/#!forum/omnetpp/join" target="_blank">Subscribe</a>
              &nbsp;/&nbsp;<a href="https://groups.google.com/forum/#!forum/omnetpp" target="_blank">Browse</a></p>
              <small><p>For discussion and getting help from the community.</p></small>
            
          </div>
        </div>

        <div class="card omnetpp-blue accent-4">
          <div class="card-content white-text white-underlined-link">
            <span class="card-title">OMNeT++ Summits</span>
            <p>The <a href="https://summit.omnetpp.org/" target="_blank">OMNeT++ Summit website</a> is a great resource if you want to explore what can be done with the simulator. OMNeT++ Summits are yearly online/offline events where community members present their work. </p>
            <br/>
            <p>Past events: 
              <a href="https://summit.omnetpp.org/2022" target="_blank">2022</a>,
              <a href="https://summit.omnetpp.org/2021" target="_blank">2021</a>,
              <a href="https://summit.omnetpp.org/2020" target="_blank">2020</a>,
              <a href="https://summit.omnetpp.org/2019" target="_blank">2019</a>,
              <a href="https://summit.omnetpp.org/2018" target="_blank">2018</a>,
              <a href="https://summit.omnetpp.org/2017" target="_blank">2017</a>,
              <a href="https://summit.omnetpp.org/2016" target="_blank">2016</a>,
              <a href="https://summit.omnetpp.org/2015" target="_blank">2015</a>,
              <a href="https://summit.omnetpp.org/2014" target="_blank">2014</a>,
              <a href="https://summit.omnetpp.org/2013" target="_blank">2013</a>,
              <a href="https://summit.omnetpp.org/2012" target="_blank">2012</a>,
              <a href="https://summit.omnetpp.org/2011" target="_blank">2011</a>,
              <a href="https://summit.omnetpp.org/2010" target="_blank">2010</a>,
              <a href="https://summit.omnetpp.org/2009" target="_blank">2009</a>,
              <a href="https://summit.omnetpp.org/2008" target="_blank">2008</a>.
            </p>
            
          </div>
        </div>

      </div>
    </div>
</div>

