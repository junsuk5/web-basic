let isJumping = false;
let isKillerStopped = true;

function jump() {
  if (isJumping == true) {
    return;
  }

  isJumping = true;
  $("#mario")
    .animate(
      {
        bottom: "300px",
      },
      500
    )
    .animate(
      {
        bottom: "100px",
      },
      500,
      function () {
        isJumping = false;
      }
    );
}

function killerMove() {
  if (isKillerStopped) {
    isKillerStopped = false;
    $("#killer").animate(
      {
        right: "120%",
      },
      3000,
      function () {
        $(this).css({
          right: "-300px",
        });
        isKillerStopped = stop;
      }
    );
  }
}

function isMarioDie() {
  let result = false;

  let marioBottom = parseInt($("#mario").css("bottom"), 10);
  let marioRight = 100;
  let killerLeft = parseInt($("#killer").css("left"), 10);

  if (marioRight > killerLeft && killerLeft > 0 && marioBottom < 200) {
    result = true;
  }

  return result;
}

$("html").keydown(function (event) {
  if (event.key == ' ') {
    jump();
  }
});

setInterval(function () {
  killerMove();

  if (isMarioDie()) {
    console.log("마리오 사망");
  }
}, 100);
