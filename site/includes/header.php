<?php
// Shared top of every page. Each page sets $page (and $title) before including this.
$page  = $page ?? '';
$title = $title ?? 'SkillsHiveX Site V3';
?>
<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title><?= htmlspecialchars($title) ?></title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@500;600;700;800&family=Figtree:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&display=swap">
<link rel="stylesheet" href="/css/site.css">
</head>
<body>

<header class="site band">
  <div class="wrap bar">
    <a class="brand" href="/" aria-label="SkillsHiveX home">
      <img class="logo" src="/img/logo.png" alt="SkillsHiveX" width="355" height="171">
    </a>
    <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mainNav">Menu</button>
    <nav class="main" id="mainNav" aria-label="Main">
      <a href="/how-it-works/"<?= $page === 'how-it-works' ? ' aria-current="page"' : '' ?>>How it works</a>
      <a href="/case-studies/"<?= $page === 'case-studies' ? ' aria-current="page"' : '' ?>>Case studies</a>
      <a href="/our-story/"<?= $page === 'our-story' ? ' aria-current="page"' : '' ?>>Our story</a>
      <a href="/join/"<?= $page === 'join' ? ' aria-current="page"' : '' ?>>Join the hive</a>
      <a class="btn solid" href="/project/"<?= $page === 'project' ? ' aria-current="page"' : '' ?>>Bring a project</a>
    </nav>
  </div>
</header>

<main>
