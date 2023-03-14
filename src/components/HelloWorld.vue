<template>
  <div class="content-container">
    <div class="card-container">
      <div class="card">
        <h2 class="card-title">Card 1</h2>
        <p class="card-content">This is the content of card 1.</p>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <h2 class="card-title">Card 2</h2>
        <p class="card-content">This is the content of card 2.</p>
      </div>
    </div>
    <div class="card-container">
      <div class="card">
        <h2 class="card-title">Card 3</h2>
        <p class="card-content">This is the content of card 3.</p>
      </div>
    </div>
  </div>
</template>

<style>
.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 60px;
}

.card-container {
  width: calc(33.33% - 20px);
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .card-container {
    width: 100%;
  }
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 20px;
  height: 100%;
}

.card-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.card-content {
  font-size: 16px;
  color: #666;
}
</style>
