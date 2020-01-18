class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # names = [:bee]
    names.each { |name| 

      define_method(name.to_sym) {
        # puts new_name
        new_name = ("@" + name.to_s).to_sym
        puts new_name
        instance_variable_get(new_name)
      }

      define_method("#{name}=") { |value|
        # name = :bee
        new_name = ("@" + name.to_s).to_sym
        # name = :@bee
        instance_variable_set(new_name, value)
      }
    }
  end

  def my_method(one_thing, another_thing)

  end
end


class NewClass < AttrAccessorObject
  my_attr_accessor :bee
  # def initialize() 
  #   @bee = "bee"
  # end
end