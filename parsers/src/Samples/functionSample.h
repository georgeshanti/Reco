#include <napi.h>

class Obj{
  public:
    std::string str;
    int t;
};

namespace functionexample {
  std::string hello();
  Napi::String HelloWrapped(const Napi::CallbackInfo& info);
  Napi::Object Init(Napi::Env env, Napi::Object exports);
};