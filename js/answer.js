
function toggleAnswer(questionId, answerId) {
    const answerElement = document.getElementById(answerId);
    answerElement.classList.toggle('hidden');
  }
// question-1
document.getElementById('question1').addEventListener('click', function() {
    toggleAnswer('question1', 'answer1');
});

// question-2
document.getElementById('question2').addEventListener('click', function() {
    toggleAnswer('question2', 'answer2');
});
// question-3
document.getElementById('question3').addEventListener('click', function() {
    toggleAnswer('question3', 'answer3');
});

// question-4
document.getElementById('question4').addEventListener('click', function() {
    toggleAnswer('question4', 'answer4');
});
  