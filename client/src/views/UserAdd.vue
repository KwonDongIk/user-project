<!-- views/UserAdd.vue -->
<template>
  <div class="container">
    <table class="table">      
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">
          <input type="text" >
        </td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">
          <input type="password" >
        </td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">
          <input type="text" >
        </td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">
          <input type="radio" > 남자 
          <input type="radio" > 여자 
        </td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">
          <input type="number" >
        </td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">
          <input type="date" >
        </td>
      </tr>
    </table>
    <div>
      <button class="btn btn-info" >등록</button>
    </div>
  </div>
</template>