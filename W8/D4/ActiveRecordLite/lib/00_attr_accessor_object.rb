class AttrAccessorObject
  def self.my_attr_accessor(*names)
    names.each { |name| 

      define_method(name.to_sym) {
        new_name = ("@" + name.to_s).to_sym
        instance_variable_get(new_name)
      }

      define_method("#{name}=") { |value|
        new_name = ("@" + name.to_s).to_sym
        instance_variable_set(new_name, value)
      }
    }
  end
end