<?php
$page  = 'project';
$title = 'SkillsHiveX Site V3';
require __DIR__ . '/../includes/header.php';
?>
<!-- ================= BRING A PROJECT ================= -->
<div data-page="project">
  <section class="hero band">
    <canvas id="swarm2" class="swarm-bg" aria-label="Avatars gathering around a project" role="img"></canvas>
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Bring a project</span>
        <h1>Need a team to <span class="bee">take it on</span>?</h1>
        <p class="lede">Tell us what's stuck. Within a week we'll introduce you to a small team of experienced independents who can deliver it, at a fixed scope and price.</p>
        <ul class="list">
          <li><span>Senior people who run their own businesses, so no juniors learning on your budget.</span></li>
          <li><span>One point of contact, however many specialists the work needs.</span></li>
          <li><span>Fixed-cost projects, from a three-week sprint to a multi-year programme.</span></li>
        </ul>
        <div class="doors"><a class="btn solid" href="#brief" data-jump="brief">Describe your project</a></div>
      </div>
      <div class="swarm-panel" data-note="Same swarm, re-used: here it forms around a 'project' hex">
        <div class="swarm-cap"><span>Your project, your team</span><span>Inner Hive founders closest in</span></div>
      </div>
    </div>
  </section>

  <section class="blk alt band">
    <div class="wrap">
      <div class="stack"><span class="eyebrow">What happens next</span><h2>From first call to delivery</h2></div>
      <div class="journey" id="projJourney"></div>
    </div>
  </section>

  <section class="blk band">
    <div class="wrap">
      <div class="stack"><span class="eyebrow">Recent work</span><h2>The kind of thing we take on</h2></div>
      <div class="cards" id="projCases"></div>
    </div>
  </section>

  <section class="blk alt band" id="brief">
    <div class="wrap formgrid">
      <div class="side">
        <span class="eyebrow">Your project</span>
        <h2>Tell us what you need.</h2>
        <p class="muted">Five minutes. Mike reads every brief himself and replies within two working days.</p>
        <ul class="list">
          <li><span>No obligation, no hard sell.</span></li>
          <li><span>We'll say plainly if the hive isn't the right fit.</span></li>
        </ul>
      </div>
      <div>
        <form class="f" id="projForm" novalidate>
          <fieldset>
            <legend>About you</legend>
            <div class="row2">
              <div class="q"><label for="p-name">Your name <span class="req">*</span></label><input id="p-name" type="text" required autocomplete="name"></div>
              <div class="q"><label for="p-email">Email <span class="req">*</span></label><input id="p-email" type="email" required autocomplete="email"></div>
            </div>
            <div class="q"><label for="p-org">Organisation</label><input id="p-org" type="text" autocomplete="organization"></div>
          </fieldset>
          <fieldset>
            <legend>The project</legend>
            <div class="q"><label for="p-what">What needs doing, and what's stuck? <span class="req">*</span></label><textarea id="p-what" required placeholder="A few sentences is plenty"></textarea></div>
            <div class="q"><span class="lbl" id="p-when-l">When do you need it?</span>
              <div class="opts" role="radiogroup" aria-labelledby="p-when-l">
                <label><input type="radio" name="p-when" id="p-when-1">This month</label>
                <label><input type="radio" name="p-when" id="p-when-2">Next three months</label>
                <label><input type="radio" name="p-when" id="p-when-3">Later this year</label>
                <label><input type="radio" name="p-when" id="p-when-4">Not sure yet</label>
              </div></div>
            <div class="q"><span class="lbl" id="p-bud-l">Rough budget</span>
              <div class="opts" role="radiogroup" aria-labelledby="p-bud-l">
                <label><input type="radio" name="p-bud" id="p-bud-1">Under £5k</label>
                <label><input type="radio" name="p-bud" id="p-bud-2">£5k–£25k</label>
                <label><input type="radio" name="p-bud" id="p-bud-3">£25k–£100k</label>
                <label><input type="radio" name="p-bud" id="p-bud-4">£100k+</label>
                <label><input type="radio" name="p-bud" id="p-bud-5">Not sure</label>
              </div></div>
            <div class="q"><label for="p-src">How did you hear about us?</label><input id="p-src" type="text"></div>
          </fieldset>
          <p class="err" id="projErr" hidden>Please add your name, a valid email and a line about the project.</p>
          <div><button class="btn solid" type="submit">Send my project</button></div>
        </form>
        <div class="done" id="projDone" hidden>
          <h3>Thanks, your project is with Mike.</h3>
          <p class="muted">You'll hear back within two working days. (Prototype: nothing has been sent.)</p>
        </div>
      </div>
    </div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
