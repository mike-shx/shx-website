<?php
$page  = 'home';
$title = 'SkillsHiveX Site V3';
require __DIR__ . '/includes/header.php';
?>
<!-- ================= HOME ================= -->
<div data-page="home">
  <section class="hero band">
    <canvas id="swarm" class="swarm-bg" aria-label="Member avatars gathering into a hive shape" role="img"></canvas>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">A community of experienced independents</span>
        <h1>The right people, <span class="bee">assembled</span> around your project.</h1>
        <p class="lede">SHX is a hive of solopreneurs who form pop-up teams to deliver super-hero standard work for our clients.</p>
        <p class="lede">Bring your skills and your projects and find your people.</p>
        <p class="lede punch">Doing work your way doesn't have to mean doing it alone.</p>
        <div class="doors">
          <a class="btn solid" href="/project/">Bring a project</a>
          <a class="btn line" href="/join/">Join the hive</a>
        </div>
      </div>
      <div class="swarm-panel" data-note="Swarm runs full width behind the copy and gathers here. Centre: Mike and the six Inner Hive founders (Alan replaced Ollie, 25 Nov) (amber rings). Outer rings: example heroes, repeated, until more members have avatars. V2: hover over an avatar to enlarge it (tap on mobile). Later: reveal first names and primary skills">
        <div class="swarm-cap"><span>Meet the hive</span><span>Inner Hive founders at the centre</span></div>
      </div>
    </div>
  </section>

  <section class="blk alt band">
    <div class="wrap two">
      <div class="stack">
        <span class="eyebrow">Why it works</span>
        <h2>Highly skilled super-heroes who trade on <em>trust, quality and reputation</em>.</h2>
        <p class="muted">Watch this short video for a few words from our founder.</p>
      </div>
      <a class="video" href="https://youtu.be/E0eBn5flp7k" target="_blank" rel="noopener" aria-label="Watch the founder video on YouTube (opens in a new tab)" data-note="Real video. The prototype host blocks embedded players, so this opens YouTube in a new tab. On the live site, embed it here: youtube-nocookie.com/embed/E0eBn5flp7k">
        <span class="tag">A few words from our founder</span>
        <span class="yt">Watch on YouTube ↗</span>
        <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 3l16 9-16 9z" fill="#1a1204"/></svg></span>
        <div class="vox"><span>"Conversations that turn ideas into income"</span><span>"I found my tribe"</span></div>
      </a>
    </div>
  </section>

  <section class="blk band">
    <div class="wrap">
      <div class="explain-box" data-note="Written version of the video, so search engines and AI tools can read it. Moved into its own section after 22 Oct review so it doesn't compete with the video">
        <span class="eyebrow">In short</span>
      <div class="explain">
        <div><strong>One brief, one team</strong><p class="muted">You describe the job. We gather independents whose skills fit it, often people who have worked together before, and agree a fixed scope.</p></div>
        <div><strong>Senior people, no overheads</strong><p class="muted">Every member runs their own business. You get experienced hands on the work without agency layers or long contracts.</p></div>
        <div><strong>More than winning work</strong><p class="muted">Between projects, members swap problems, test ideas and open doors for each other. That's why there is such a buzz in the hive!</p></div>
      </div>
      </div>
    </div>
  </section>

  <section class="blk alt band">
    <div class="wrap">
      <div class="stack" data-note="Community glimpse only. Individual profiles stay inside the community">
        <span class="eyebrow">Inside the hive</span>
        <h2>Who's in the hive</h2>
        <p class="muted">Strategists, makers, lawyers, sellers, operators. Members meet regularly inside the community, after onboarding.</p>
      </div>
      <div class="ribbon" aria-hidden="true"><div class="track" id="ribbon"></div></div>
      <div class="skills">
        <span>Brand &amp; narrative</span><span>Strategic marketing</span><span>Sales &amp; pipeline</span><span>Contracts &amp; legal</span><span>Operations</span><span>Finance &amp; funding bids</span><span>Product &amp; UX</span><span>Film &amp; publishing</span><span>Events &amp; roundtables</span><span>AI &amp; automation</span><span>Logistics</span><span>Leadership development</span>
      </div>
    </div>
  </section>

  <section class="blk band">
    <div class="wrap">
      <div class="stack">
        <span class="eyebrow">Projects</span>
        <h2>All skills, all sectors, all styles. <em>All collaborative</em>.</h2>
      </div>
      <div class="cards" id="homeCases"></div>
      <p style="margin-top:28px"><a class="btn line" href="/case-studies/">See all case studies</a></p>
    </div>
  </section>

  <section class="blk alt band">
    <div class="wrap">
      <div class="quote" data-note="Placeholder wording. Swap in Steph's actual quote from the earlier prototype">
        <span class="mark" aria-hidden="true">"</span>
        <div>
          <blockquote>It felt less like hiring a supplier and more like borrowing a team who already trusted each other.</blockquote>
          <cite>Steph, community member</cite>
        </div>
      </div>
    </div>
  </section>

  <section class="blk band">
    <div class="wrap">
      <div class="stack">
        <span class="eyebrow">How it works</span>
        <h2>Most projects start as a conversation.</h2>
      </div>
      <div class="journey grow" id="homeJourney" data-note="V2: hover over a hexagon and its step word expands"></div>
    </div>
  </section>

  <section class="blk alt band">
    <div class="wrap origin">
      <div class="stack">
        <span class="eyebrow">Where it started</span>
        <h2>"What's the exit plan?" <em>I hadn't even left yet.</em></h2>
        <p class="muted">At my Royal Mail leaving drinks, everyone asked the same question. My answer then is my answer now: build a community of people who collaborate on projects, step up, and run the community themselves. Nobody knew what I was talking about.</p>
        <p class="muted">Fifteen years of pop-up teams later, those people became SkillsHiveX.</p>
        <p><a class="btn line" href="/our-story/">Read our story</a></p>
      </div>
      <div class="stack" style="justify-content:center">
        <span class="eyebrow">How we work together</span>
        <div class="verbs"><span>sense</span><span>invite</span><span>consent</span><span>steward</span><span>learn</span><span>integrate</span></div>
        <p class="muted">From the SkillsHiveX manifesto.</p>
      </div>
    </div>
  </section>
</div>

<?php require __DIR__ . '/includes/footer.php'; ?>
