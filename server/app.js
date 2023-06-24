const express = require('express')
const app = express()
const cors = require('cors')
const port = 3030
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

let users = []
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 회원가입 구현
app.post('/auth/signup', (req, res) => {
  const { id, pw } = req.body;

  // 회원 데이터 저장
  users.push({ id, pw });
  console.log(users)
  res.status(201).json();
})

// 로그인 구현
app.post('/auth/signin', (req, res) => {
  const { id, pw } = req.body;

  // 유저 정보 확인
  const user = users.find((user) => user.id === id && user.pw === pw)

  if (!user) {
    return res.status(401).json({ message: 'invalid id or password' })
  }

  // JWT 생성
  const access_token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' })

  console.log(access_token)
  // JWT를 응답에 포함하여 반환
  res.status(200).json({ access_token })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})