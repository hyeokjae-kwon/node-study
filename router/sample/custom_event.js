/**
 * EventEmitter : node.js 의 모든 이벤트처리가 정의된 기본객체. 이벤트를 사용하기 위해서는 이 객체를 재정의해서 사용해야할 수 있어야 함.
 * on( ) : 이벤트를 연결하는 함수.
 * emit( ) : 이벤트를 발생시키는 함수. 위의 on( ) 함수에서 'call'라는 이벤트가 캐치되기 위해서는 emit('call')의 형태로 이벤트를 발생시켜야 함.
 * 
 */

// 이벤트가 정의되 있는 events 모듈 생성. 이전 버전의 process.EventEmitter() 는 deprecated!
var EventEmitter = require('events');

// 생성된 이벤트 모듈을 사용하기 위해 custom_object로 초기화
var custom_object = new EventEmitter();

// events 모듈에 선언되어 있는 on() 함수를 재정의 하여 'call' 이벤트를 처리
custom_object.on('call', () => {
    console.log('called events!');
});

console.log('이벤트 순서 체크');

// call 이벤트를 강제로 발생
custom_object.emit('call');