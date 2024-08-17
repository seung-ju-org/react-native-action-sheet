#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNActionSheetManager, NSObject)

RCT_EXTERN_METHOD(open:(NSString *)title
                  withMessage:(NSString *)message
                  withButtons:(NSArray *)buttons
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
