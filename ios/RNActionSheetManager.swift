@objc(RNActionSheetManager)
class RNActionSheetManager: NSObject {
    @objc(open:withMessage:withButtons:withResolver:withRejecter:)
    func open(
        title: String?,
        message: String?,
        buttons: [NSDictionary]?,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) -> Void {
        DispatchQueue.main.async {
            guard let keyWindow = UIApplication.shared.windows.filter({$0.isKeyWindow}).first else {
                reject("no_key_window", "Unable to find key window", nil)
                return
            }

            guard var topController = keyWindow.rootViewController else {
                reject("no_root_view_controller", "Unable to find root view controller", nil)
                return
            }

            while let presentedViewController = topController.presentedViewController {
                topController = presentedViewController
            }

            let alert = UIAlertController(
                title: title,
                message: message,
                preferredStyle: .actionSheet
            )

            if let requiredButtons = buttons {
                for (index, button) in requiredButtons.enumerated() {
                    guard let title = button["text"] as? String else {
                        reject("no_button_title", "Unable to not set title in button", nil)
                        return
                    }
                    
                    let style: UIAlertAction.Style = [
                        "default": .default,
                        "cancel": .cancel,
                        "destructive": .destructive,
                    ][button["style"] as? String] ?? .default
                    
                    let handler: ((UIAlertAction) -> Void) = { _ in
                        resolve(index)
                    }
                    
                    alert.addAction(UIAlertAction(
                        title: title,
                        style: style,
                        handler: handler
                    ))
                }
            }

            topController.present(alert, animated: true, completion: nil)
        }
    }
}
