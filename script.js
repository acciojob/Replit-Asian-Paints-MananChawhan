document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });

  const target = document.getElementById(blockId);
  if (target) {
    target.style.backgroundColor = color;
  }
});

document.getElementById("reset_button").addEventListener("click", function () {
  const allBlocks = document.querySelectorAll(".grid-item");
  allBlocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});
