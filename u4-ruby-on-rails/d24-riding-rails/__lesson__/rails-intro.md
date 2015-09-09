# Rails Intro / ActiveRecord

##### LEARNING OBJECTIVES
- SWBAT Start a Rails Server/Console
- SWBAT Create ActiveRecord Models
- SWBAT Implement Login Functionality

### STEP 1: Riding Rails
- `rails server`
- `rails console`
- `rake db:create`
- `rake db:migrate`
- `rails generate model`
- `rails generate scaffold_controller`
- `rails generate controller`

### STEP 2: ActiveRecord

```
class User < ActiveRecord::Base

  def activate!
    self.actived_at = Time.now
    # TODO: Send Confirmation Email
    save!
  end

end
```

### STEP 3: ActiveRecord Associations

```
class User < ActiveRecord::Base
  has_many :friendships
  has_many :friends, through: :friendships
end
```

```
class Friendship < ActiveRecord::Base
  belongs_to :user
  belongs_to :friend, class_name: 'User'
end
```

### STEP 4: Authentication

```
class User < ActiveRecord::Base
  has_secure_password
end
```

```
  @user.authenticate(params[:password])
```
