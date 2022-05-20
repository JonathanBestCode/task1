function onChange() {
    const $ = document.querySelector.bind(document);

    const teamNumber = $('#team-number')
    const member = $('#member-list')

    var html = [];
    if (teamNumber.value > 1) {
        for (var i = 1; i <= teamNumber.value; i++) {
            var num = i + 1;
            html[i] = '<div class="each-member">'
            html[i] += ' <div class="member-title"> Thành viên ' + num + ' </div>'
            html[i] += '<div class="member-form">'
            html[i] += ' <div class="form-group">'
            html[i] += '<label class="" for="">Họ và tên </label>'
            html[i] += ' <input type="text" name="fullName_' + num + '" class="" value="" id="" required placeholder="Nguyễn Văn A">'
            html[i] += '</div>'
            html[i] += '<div class="form-group">'
            html[i] += '<label class="" for="">Email </label>'
            html[i] += ' <input type="email" name="email_' + num + '" class="" value="" id="" required placeholder="example@gmail.com">'
            html[i] += '</div>'
            html[i] += ' <div class="form-group">'
            html[i] += '<label class="" for="">Số điện thoại </label>'
            html[i] += ' <input type="number" name="phoneNumber_' + num + '" class="" value="" id="" required placeholder="09xxxxxxxx">'
            html[i] += '</div>'
            html[i] += ' <div class="form-group">'
            html[i] += '<label class="" for="">Kĩ năng </label>'
            html[i] += ' <input type="text" name="skill_' + num + '" class="" value="" id="" required placeholder="Laravel, NodeJs,...">'
            html[i] += '</div>'
            html[i] += '</div>'
            html[i] += '</div>'
        }
        member.innerHTML = html
    } else {
        console.log('<=1')
    }
}