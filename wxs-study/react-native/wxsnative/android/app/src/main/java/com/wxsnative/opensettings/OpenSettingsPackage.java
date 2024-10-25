package com.wxsnative.opensettings; // 记得把<projectname>改为你的项目名称
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
 
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
 
public class OpenSettingsPackage implements ReactPackage {
  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
 
    modules.add(new OpenSettingsModule(reactContext));
 
    return modules;
  }
 
//   @Override
//   public List<<Class>? extends JavaScriptModule> createJSModules() {
//     return Collections.emptyList();
//   }
 
  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}