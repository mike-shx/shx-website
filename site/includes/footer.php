<?php // Shared bottom of every page: closing banner, footer, review-notes button and the site script ?>
<?php if ($page !== 'how-it-works'): // this banner was hidden on How it works ?>
<section class="cta band">
  <div class="wrap" style="padding-block:56px">
    <h2>Got a project, or <em>looking for your people</em>?</h2>
    <div class="doors"><a class="btn solid" href="/project/">Bring a project</a><a class="btn line" href="/join/">Join the hive</a></div>
  </div>
</section>
<?php endif; ?>
</main>

<footer class="band">
  <div class="wrap">
    <a class="brand" href="/" aria-label="SkillsHiveX home">
      <img class="logo" src="/img/logo.png" alt="SkillsHiveX" width="355" height="171">
    </a>
    <small>Prototype V3 · 19 Nov 2026 · Images, avatars and case studies are placeholders</small>
  </div>
</footer>

<button class="review-toggle" id="reviewBtn" aria-pressed="false">Show review notes</button>

<script src="/js/site.js"></script>

</body></html>