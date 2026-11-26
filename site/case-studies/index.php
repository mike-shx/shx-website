<?php
$page  = 'case-studies';
$title = 'SkillsHiveX Site V3';
require __DIR__ . '/../includes/header.php';
?>
<!-- ================= CASE STUDIES ================= -->
<div data-page="stories">
  <section class="pagehead band">
    <div class="wrap stack">
      <span class="eyebrow">Case studies</span>
      <h1>All skills, all sectors, all styles. <em>All collaborative</em>.</h1>
      <p class="lede">Each story follows the same shape: situation, problem, solution, outcome, learnings. The examples below are illustrative and will be replaced with real member projects.</p>
      <div class="filters" role="group" aria-label="Filter case studies">
        <button class="chip" aria-pressed="true" data-f="all">All</button>
        <button class="chip" aria-pressed="false" data-f="Non-creative">Non-creative</button>
        <button class="chip" aria-pressed="false" data-f="Creative">Creative</button>
        <button class="chip" aria-pressed="false" data-f="Large">Large</button>
        <button class="chip" aria-pressed="false" data-f="Medium">Medium</button>
        <button class="chip" aria-pressed="false" data-f="Small">Small</button>
      </div>
    </div>
  </section>
  <section class="blk band" style="padding-top:8px">
    <div class="wrap"><div class="cards" id="allCases" data-note="Fictitious placeholders in the five-part format. Replace with real member projects"></div></div>
  </section>
</div>

<?php require __DIR__ . '/../includes/footer.php'; ?>
