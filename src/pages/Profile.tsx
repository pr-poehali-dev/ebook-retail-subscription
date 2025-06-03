import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Icon name="User" className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Мои книги</h2>
              <div className="p-4 border rounded-lg text-center text-gray-500">
                У вас пока нет приобретенных книг
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Подписки</h2>
              <div className="p-4 border rounded-lg text-center text-gray-500">
                У вас нет активных подписок
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <Button variant="outline" onClick={logout}>
              Выйти из аккаунта
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
