document.addEventListener('DOMContentLoaded', () => {
  const lessons = [
    { title: "Lezione 1: Essere", file: "Record1.m4a" },
    { title: "Lezione 2: Avere", file: "Record2.m4a" },
    { title: "Lezione 3: Stare", file: "Record3.m4a" },
    { title: "Lezione 4: Fare", file: "Record4.m4a" },
    { title: "Lezione 5: Conversazione", file: "Record5.m4a" }
  ];

  const lessonList = document.getElementById('lessonList');

  lessons.forEach((lesson) => {
    const div = document.createElement('div');
    div.className = 'lesson';

    div.innerHTML = `
      <div class="lesson-title">${lesson.title}</div>
      <audio controls>
        <source src="${lesson.file}" type="audio/mp4">
        Your browser does not support the audio element.
      </audio>
    `;

    lessonList.appendChild(div);
  });
});
