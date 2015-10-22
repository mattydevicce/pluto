class Book < ActiveRecord::Base
  validates :name, :source, presence: true

  def content
    fetch_content || self[:content] || fetch_content
  end

  private

  def fetch_content(url=source, limit=5)
    raise 'Too many redirects' unless limit > 0
    url = URI(url)
    request = Net::HTTP::Get.new url.path
    response = Net::HTTP.start(url.host, url.port) { |http| http.request(request) }
    case response
    when Net::HTTPSuccess     then update_column :content, response.body
    when Net::HTTPRedirection then fetch_content(response['location'], limit - 1)
    else response.error!
    end
    self[:content]
  end

end
