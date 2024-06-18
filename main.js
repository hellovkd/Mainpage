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
    // 입력값 가져오기
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var reason = document.getElementById('reason').value;

    // 새로운 팀원 요소 생성
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

    // 팀원 목록에 추가
    var teamList = document.getElementById('teamList');
    teamList.appendChild(newMember);

    // 입력 필드 초기화
    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('reason').value = '';
}

