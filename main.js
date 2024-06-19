function toggleDescription(id) {
    var description = document.getElementById(id);
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

// 팀원 추가 함수
function addTeamMember() {
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var reason = document.getElementById('reason').value;

    var newMember = document.createElement('div');
    newMember.classList.add('team-member');

    var html = `
        <h3>${name}</h3>
        <p>${contact}</p>
        <hr>
        <h4>팀 프로젝트 맡은 부분</h4>
        <p>${reason}</p>
    `;

    newMember.innerHTML = html;

    var teamList = document.getElementById('teamList');
    teamList.appendChild(newMember);

    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('reason').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = document.getElementById('about');

    const profile = {
        name: '윤도현',
        school: '중부대학교 정보보호학전공',
        portfolio: 'https://ydh483.notion.site/e6e333606143450fa93a3253d1373688?pvs=74'
    };

    aboutContent.innerHTML = `
        <section>
            <h2>이름: ${profile.name}</h2>
        </section>
        <section>
            <h2>학교: ${profile.school}</h2>
        </section>
        <section>
            <h2>포트폴리오: <a href="${profile.portfolio}" target="_blank">노션</a></h2>
        </section>
    `;

    const timetable = [
        { time: '1교시', monday: '컴퓨터 네트워크', tuesday: '', wednesday: '보안자료구조', thursday: '컴퓨터 네트워크', friday: '' },
        { time: '2교시', monday: '컴퓨터 네트워크', tuesday: '', wednesday: '보안자료구조', thursday: '컴퓨터 네트워크', friday: '' },
        { time: '3교시', monday: 'Citizen 3', tuesday: '', wednesday: '웹 프로그래밍', thursday: '보안자료구조', friday: '' },
        { time: '4교시', monday: 'Citizen 3', tuesday: '', wednesday: '웹 프로그래밍', thursday: '보안자료구조', friday: '' },
        { time: '5교시', monday: '컴퓨터 네트워크', tuesday: '', wednesday: '', thursday: '', friday: '' },
        { time: '6교시', monday: '객체지향 프로그래밍', tuesday: '서버구축 및 운영실습', wednesday: '', thursday: '서버구축 및 운영실습', friday: '' },
        { time: '7교시', monday: '객체지향 프로그래밍', tuesday: '서버구축 및 운영실습', wednesday: '', thursday: '서버구축 및 운영실습', friday: '' },
        { time: '8교시', monday: '', tuesday: '웹 프로그래밍', wednesday: '', thursday: '객체지향 프로그래밍', friday: '' },
        { time: '9교시', monday: '', tuesday: '웹 프로그래밍', wednesday: '', thursday: '객체지향 프로그래밍', friday: '' }
    ];

    const timetableBody = document.querySelector('#timetable tbody');



    function newTimetable() {
        timetableBody.innerHTML = '';
        timetable.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.time}</td>
                <td>${row.monday}</td>
                <td>${row.tuesday}</td>
                <td>${row.wednesday}</td>
                <td>${row.thursday}</td>
                <td>${row.friday}</td>
            `;
            timetableBody.appendChild(tr);
        });
    }

    newTimetable();

    const form = document.getElementById('timetable-form');
    form.addEventListener('timetable-submit', function(event) {
        event.preventDefault();

        const time = document.getElementById('time').value;
        const monday = document.getElementById('monday').value;
        const tuesday = document.getElementById('tuesday').value;
        const wednesday = document.getElementById('wednesday').value;
        const thursday = document.getElementById('thursday').value;
        const friday = document.getElementById('friday').value;

        const newRow = { time, monday, tuesday, wednesday, thursday, friday };
        timetable.push(newRow);
        newTimetable();

        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector("#screen");
    const result = document.querySelector("#result");
  
    let startTime; // 시작시간
    let endTime; // 끝나는 시간
    let responseTime; // 측정시간
    let records = []; // 평균 반응 속도 구할 빈 배열
    let timeoutId; // setTimeout 함수를 담을 변수
  
    screen.addEventListener("click", () => {
      if (screen.classList.contains("waiting")) {
        screen.classList.replace("waiting", "ready");
        screen.textContent = "초록색이 되면 클릭하세요";
        timeoutId = setTimeout(() => {
          startTime = new Date();
          screen.classList.replace("ready", "now");
          screen.textContent = "클릭 하세요!";
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if (screen.classList.contains("ready")) {
        clearTimeout(timeoutId);
        screen.textContent = '너무 성급합니다!';
        screen.classList.replace('ready', 'waiting')
      } else if (screen.classList.contains("now")) {
        endTime = new Date();
        responseTime = endTime - startTime; // 측정시간
        records.push(responseTime);
        let Avg = records.reduce((acc, cur) => {return acc+cur}, 0) / records.length; // 평균 반응 속도
        result.textContent = '현재 : ' + responseTime + " ms" + ' ' + '평균 속도 : ' + Avg;
      //   startTime = null;
      //   endTime = null; 여기서 null 이거 없어도 되지 않나?
        screen.classList.replace("now", "waiting");
        screen.textContent = "클릭해서 시작하세요";
      }
    });
  });


