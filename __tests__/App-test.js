import Activity from '../api/activity/activity.service';
import Course from '../api/course/course.service';
import User from '../api/user/user.service';

// test('회원가입', async () => {
//   cb(
//     await User.signup(
//       'userId',
//       'PASSW0RD',
//       '다날귀욤',
//       'danieluhm2004@gmail.com',
//       '01095637570',
//       'YXNkZg=='
//       )
//     );
// });

test('로그인', async (cb) => {
  cb(
    await User.login(
      'userId',
      'PASSW0RD',
      )
    );
});

test('엑티비티 추가', async (cb) => {
  cb(
    await Activity.addActivity(
      '다날지역',
      '디스크립션',
      '이미지',
      '다날 여행사'
    )
  )
});

test('내 엑티비티', async (cb) => {
  cb(
    await Activity.getMyActivity()
  );
});

test('엑티비티 가져오기', async (cb) => {
  cb(
    await Activity.getActivityById('5dfe479077130a70d1eadf77')
  );
});

test('엑티비티 검색', async (cb) => {
  cb(
    await Activity.getActivitySearch('다날지역')
  );
});

test('내 코스 가져오기', async (cb) => {
  cb(
    await Course.getMyActivity()
  );
});

test('코스 만들기', async (cb) => {
  cb(
    await Course.createCourse(
      '다날 이름',
      '이건 설명이라오',
      'YXNkZg=='
    )
  )
});

test('코스 검색하기', async (cb) => {
  cb(
    await Course.searchCourse('다날')
  )
});
