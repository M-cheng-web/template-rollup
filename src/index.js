import webtracing from 'web-tracing';

const fun = () => {
  const obj = {
    name: 'cheng',
    age: 13,
    ccc: 1,
  }
  console.log({ ...obj, webtracing });
}

// 这里 webtracing 打印是 undefined,因为在config.js文件中对此屏蔽打包了

fun()