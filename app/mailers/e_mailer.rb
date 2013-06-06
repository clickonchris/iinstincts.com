class EMailer < ActionMailer::Base
  default :from=>"chris@iinstincts.com"
  
  def thank_you_mail(params)
    @params = params
    mail(:to=>params[:email], :subject=>"Thanks for your message at iinstincts.com")
  end
  
  def contact_mail(params)
    @params = params
    mail(:to=>"chris@iinstincts.com", :from=>@params[:email], :subject=>@params[:subject])
  end
end
