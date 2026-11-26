<?php
$page  = 'join';
$title = 'SkillsHiveX Site V3';
require __DIR__ . '/../includes/header.php';
?>
<!-- ================= JOIN ================= -->
<div data-page="join">
  <section class="pagehead band">
    <div class="wrap stack">
      <span class="eyebrow">Join the hive</span>
      <h1>Independent, <span class="bee">not alone</span>.</h1>
      <p class="lede">SkillsHiveX is for collaborative solopreneurs who want better work and better company. Members form teams for projects, and think out loud with people who've been there.</p>
    </div>
  </section>
  <section class="blk band" style="padding-top:40px">
    <div class="wrap explain" style="margin-top:0">
      <div><strong>Projects that need you</strong><p class="muted">Join pop-up teams for work bigger than one person, on terms you choose: paid, shared, a favour, or free for a cause.</p></div>
      <div><strong>A hive to think with</strong><p class="muted">Weekly conversations, sounding boards and roundtables. Bring what's stuck and leave with new angles and perspectives.</p></div>
      <div><strong>A community you help run</strong><p class="muted">Members steward the hive. Contributions are recognised, and the people doing the work own the client relationships.</p></div>
    </div>
  </section>
  <section class="blk band" style="padding-top:24px">
    <div class="wrap">
      <div class="stack" data-note="Community glimpse only. Individual profiles stay inside the community">
        <span class="eyebrow">Inside the hive</span>
        <h2>Who's in the hive</h2>
        <p class="muted">Strategists, makers, lawyers, sellers, operators. Members meet regularly inside the community, after onboarding.</p>
      </div>
      <div class="ribbon" aria-hidden="true"><div class="track"></div></div>
      <div class="skills">
        <span>Brand &amp; narrative</span><span>Strategic marketing</span><span>Sales &amp; pipeline</span><span>Contracts &amp; legal</span><span>Operations</span><span>Finance &amp; funding bids</span><span>Product &amp; UX</span><span>Film &amp; publishing</span><span>Events &amp; roundtables</span><span>AI &amp; automation</span><span>Logistics</span><span>Leadership development</span>
      </div>
    </div>
  </section>

  <section class="blk alt band" id="onboard">
    <div class="wrap formgrid">
      <div class="side">
        <span class="eyebrow">Start onboarding</span>
        <h2>Share the basics now and we'll get to know you in the Hive.</h2>
        <p class="muted">We'll fill in your career history from LinkedIn if you let us, then talk through the rest when we meet.</p>
        <ul class="list">
          <li><span>Just the basics now, we want to meet you asap!</span></li>
          <li><span>Next: a 25-minute onboarding conversation.</span></li>
        </ul>
      </div>
      <div>
        <form class="f" id="joinForm" novalidate data-note="V3: cut to three questions. Everything else is covered in the onboarding call">
          <fieldset>
            <legend>The basics</legend>
            <div class="row2">
              <div class="q"><label for="j1"><span class="n">1</span>Your name <span class="req">*</span></label><input id="j1" type="text" required autocomplete="name"></div>
              <div class="q"><label for="j2"><span class="n">2</span>Email <span class="req">*</span></label><input id="j2" type="email" required autocomplete="email"></div>
            </div>
            <div class="q"><label for="j3"><span class="n">3</span>Your LinkedIn profile <span class="req">*</span></label><input id="j3" type="url" required placeholder="linkedin.com/in/…">
              <div class="opts" role="radiogroup" aria-label="Permission to use your LinkedIn profile">
                <label><input type="radio" name="j3p" id="j3p-y" checked>Yes, capture my skills and experience from it</label>
                <label><input type="radio" name="j3p" id="j3p-n">No, I'll tell you myself</label>
              </div></div>
          </fieldset>
          <p class="err" id="joinErr" hidden>Please add your name, a valid email and your LinkedIn profile.</p>
          <div><button class="btn solid" type="submit">Join now</button></div>
        </form>
        <div class="done" id="joinDone" hidden>
          <h3>Welcome to the hive.</h3>
          <p class="muted">Choose a time slot from the calendar, we can't wait to meet you!</p>
          <div class="slots" id="slots" data-note="Mock slot picker. On the live site this is the real booking calendar (e.g. GoHighLevel or Calendly)"></div>
          <div><button class="btn solid" type="button" id="slotBook" disabled>Book this slot</button></div>
          <p class="muted" id="slotDone" hidden></p>
        </div>
      </div>
    </div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
