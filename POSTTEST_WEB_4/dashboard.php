<?php
session_start();
if (!isset($_SESSION['username'])) {
  header("Location: login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <h2>📋 Dashboard</h2>
    <p>Selamat datang, <strong><?= htmlspecialchars($_SESSION['username']) ?></strong>!</p>
    <p>Anda berhasil login ke sistem Manajemen Perpustakaan.</p>
    <p><a href="index.php">Kembali ke Beranda</a> | <a href="logout.php">Logout</a></p>
  </main>
</body>
</html>
