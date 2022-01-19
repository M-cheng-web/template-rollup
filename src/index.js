import webtracing from 'web-tracing';

const fun = () => {
  const obj = {
    name: 'cheng',
    age: 13,
    ccc: 1,
  }
  console.log({ ...obj, webtracing });
}

fun()