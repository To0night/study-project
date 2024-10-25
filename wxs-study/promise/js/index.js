class WxsPromise {
  // 保存promise状态
  status = "pending";
  // 保存promise执行结果
  result = null;

  // 异步保存成功then回调
  thenSuccessCb = null;
  // 异步保存失败then回调
  thenErrCb = null;

  resolveFn = (result) => {
    // promise状态只能被修改一次
    if (this.status !== "pending") return;
    this.status = "resolve";
    this.result = result;
    this.thenSuccessCb && this.thenSuccessCb(result);
  };

  rejectFn = (err) => {
    // promise状态只能被修改一次
    if (this.status !== "pending") return;
    this.status = "reject";
    this.result = err;
    this.thenErrCb && this.thenErrCb(err);
  };

  constructor(executor) {
    try {
      executor(this.resolveFn, this.rejectFn);
    } catch {
      this.rejectFn();
    }
  }

  static resolve = (target) => {
    return new WxsPromise((resolve, reject) => {
      if (target instanceof WxsPromise) {
        target.then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        resolve(target);
      }
    });
  };

  static reject = (target) => {
    return new WxsPromise((resolve, reject) => {
      if (target instanceof WxsPromise) {
        target.then(
          (res) => {
            reject(res);
          },
          (err) => {
            reject(err);
          }
        );
      } else {
        reject(target);
      }
    });
  };

  static all = (promiseList) => {
    return new WxsPromise((resolve, reject) => {
      const resultList = [];
      for (let i = 0; i < promiseList.length; i++) {
        // 既然是promise那就肯定有then方法
        promiseList[i].then(
          (res) => {
            resultList.push(res);
            if (i === promiseList.length - 1) {
              // 执行完毕
              resolve(resultList);
            }
          },
          (err) => {
            //  如果出错直接返回错误的promise
            reject([err]);
          }
        );
      }
    });
  };

  static race = (promiseList) => {
    return new WxsPromise((resolve, reject) => {
      for (let i = 0; i < promiseList.length; i++) {
        promiseList[i].then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  };

  then = (successCb, errCb) => {
    if (this.status === "resolve") {
      try {
        setTimeout(() => {
          // 同步promise成功回调
          if (successCb) {
            return WxsPromise.resolve(successCb(this.result));
          }
        });
      } catch (err) {
        console.warn(err);
      }
    }
    if (this.status === "reject") {
      try {
        setTimeout(() => {
          // 同步promise失败回调
          if (errCb) {
            return WxsPromise.resolve(errCb(this.result));
          } else {
            return new WxsPromise((resolve, reject) => {
              reject(this.result);
            });
          }
        });
      } catch (err) {
        console.warn(err);
      }
    }
    if (this.status === "pending") {
      return new WxsPromise((resolve, reject) => {
        const callbackHandle = (cbResult) => {
          if (cbResult instanceof WxsPromise) {
            cbResult.then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
          } else {
            resolve(cbResult);
          }
        };
        this.thenSuccessCb = (result) => {
          callbackHandle(successCb(result));
        };
        this.thenErrCb = (err) => {
          if (errCb) {
            callbackHandle(errCb(err));
          } else {
            reject(err);
          }
        };
      });
    }
  };

  catch = (errHandle) => {
    return this.then(undefined, errHandle);
  };
}

const promiseFactory = (number, timer = 1000) => {
  return new WxsPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(number);
    }, timer);
  });
};

// const allTest = WxsPromise.all([
//   promiseFactory(1),
//   promiseFactory(2),
//   promiseFactory(3),
// ]);

// const raceTest = WxsPromise.race([
//   promiseFactory(1, 3000),
//   promiseFactory(2, 2000),
//   // promiseFactory(3, 1000),
// ]);

new WxsPromise((resolve, reject) => {
  resolve(1);
}).then((res) => {
  console.log(res);
});

console.log(1111111);
