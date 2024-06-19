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



    function renderTimetable() {
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

    renderTimetable();

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
        renderTimetable();

        form.reset();
    });
});


