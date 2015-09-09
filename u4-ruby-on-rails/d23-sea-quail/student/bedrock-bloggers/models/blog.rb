require './db/config.rb'

class Blog
  attr_accessor :id, :title, :content, :blogger_id

  def self.all
    result = $db.exec_params("SELECT * FROM blogs")     
    result.map do |blog|
      new(blog)
    end
  end

  def self.find(id)
    result = $db.exec_params("SELECT * FROM blogs WHERE id = $1", [id])
    new(result.first)
  end

  def self.create(blogger, attributes)
    result = $db.exec_params("INSERT INTO blogs (blogger_id, title, content, created_at) VALUES ($1, $2, $3, $4) RETURNING *", [blogger.id, attributes[:title], attributes[:content], Time.now])
    new(result.first)
  end

  def initialize(options={})
    @id = options['id'].to_i
    @blogger_id = options['blogger_id'].to_i
    @title = options['title']
    @content = options['content']
  end

  def blogger

  end

end
