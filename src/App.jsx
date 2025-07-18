import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Plus,
  Filter,
  ArrowUpDown,
  Save,
  MoreHorizontal,
  Bell,
  Mail,
  Settings,
  Moon,
  ChevronDown,
  Menu,
  X,
  Grid3X3,
  Users,
  Home,
  FileText,
  Calendar,
  CheckSquare,
  FileX,
  MoreVertical,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const CRMDashboard = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Nisha Giri Puri",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Justin",
      assigneeRole: "Interface S",
    },
    {
      id: 2,
      name: "Abram Press",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Miracle",
      assigneeRole: "Interface S",
    },
    {
      id: 3,
      name: "Charlie Curtis",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Nolan",
      assigneeRole: "Interface S",
    },
    {
      id: 4,
      name: "Jocelyn Curtis",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Alena",
      assigneeRole: "Interface S",
    },
    {
      id: 5,
      name: "Dulce Calzoni",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Madelyn",
      assigneeRole: "Interface S",
    },
    {
      id: 6,
      name: "Adison Curtis",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Mira",
      assigneeRole: "Interface S",
    },
    {
      id: 7,
      name: "Tatiana Septimus",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Kalya",
      assigneeRole: "Interface S",
    },
    {
      id: 8,
      name: "Jaydon Levin",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: "ID296",
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Gustavo",
      assigneeRole: "Interface S",
    },
  ]);

  const [columns, setColumns] = useState([
    { key: "name", label: "Name", visible: true, width: 240 },
    { key: "addedFrom", label: "Added from", visible: true, width: 120 },
    { key: "tags", label: "Tags", visible: true, width: 100 },
    { key: "internalId", label: "Internal Id", visible: true, width: 120 },
    { key: "clientId", label: "Client Id", visible: true, width: 100 },
    { key: "phone", label: "Phone", visible: true, width: 140 },
    { key: "clientPortal", label: "Client Portal", visible: true, width: 130 },
    { key: "assignee", label: "Assignee", visible: true, width: 180 },
  ]);

  const [editingCell, setEditingCell] = useState(null);
  const [selectedCell, setSelectedCell] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [showColumnMenu, setShowColumnMenu] = useState(null);
  const [showAddColumnMenu, setShowAddColumnMenu] = useState(false);
  const editInputRef = useRef(null);

  // Photo mapping for consistent user images
  const userPhotos = {
    "Nisha Giri Puri":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq5Q5vtPMetbB77I30rhC80N8CVw37d8CFg&s",
    "Abram Press":
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
    "Charlie Curtis":
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face&auto=format",
    "Jocelyn Curtis":
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format",
    "Dulce Calzoni":
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face&auto=format",
    "Adison Curtis":
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face&auto=format",
    "Tatiana Septimus":
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face&auto=format",
    "Jaydon Levin":
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
    "New Client":
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face&auto=format",
  };
  const defaultPhoto =
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=24&h=24&fit=crop&crop=face&auto=format";

  const assigneePhotos = {
    Justin: defaultPhoto,
    Miracle: defaultPhoto,
    Nolan: defaultPhoto,
    Alena: defaultPhoto,
    Madelyn: defaultPhoto,
    Mira: defaultPhoto,
    Kalya: defaultPhoto,
    Gustavo: defaultPhoto,
    Unassigned: defaultPhoto,
  };

  const visibleColumns = columns.filter((col) => col.visible);
  const hiddenColumns = columns.filter((col) => !col.visible);

  // Single-click selection (Requirement 4)
  const handleCellClick = (rowId, columnKey) => {
    setSelectedCell({ rowId, columnKey });
  };

  // Double-click to edit (Requirement 4)
  const handleCellDoubleClick = (rowId, columnKey) => {
    const client = clients.find((c) => c.id === rowId);
    if (client) {
      setEditingCell({ rowId, columnKey });
      setEditValue(String(client[columnKey]) || "");
    }
  };

  const handleEditSubmit = () => {
    if (editingCell) {
      setClients((prev) =>
        prev.map((client) =>
          client.id === editingCell.rowId
            ? { ...client, [editingCell.columnKey]: editValue }
            : client
        )
      );
      setEditingCell(null);
      setEditValue("");
    }
  };

  // Tab navigation (Requirement 5)
  const handleKeyDown = (e, rowId, columnKey) => {
    if (e.key === "Enter") {
      handleEditSubmit();
    } else if (e.key === "Tab") {
      e.preventDefault();
      const currentColIndex = visibleColumns.findIndex(
        (col) => col.key === columnKey
      );
      const nextColIndex = (currentColIndex + 1) % visibleColumns.length;
      const nextColumnKey = visibleColumns[nextColIndex].key;

      handleEditSubmit();
      setTimeout(() => {
        handleCellDoubleClick(rowId, nextColumnKey);
      }, 0);
    } else if (e.key === "Escape") {
      setEditingCell(null);
      setEditValue("");
    }
  };

  // Add new record at bottom (Requirement 3)
  const addNewClient = () => {
    const newId = Math.max(...clients.map((c) => c.id)) + 1;
    const newClient = {
      id: newId,
      name: "New Client",
      email: "example@gmail.com",
      addedFrom: "System",
      tags: "-",
      internalId: `ID${300 + newId}`,
      clientId: "-",
      phone: "+9779867****",
      clientPortal: "Deactivated",
      assignee: "Unassigned",
      assigneeRole: "Interface S",
    };
    setClients((prev) => [...prev, newClient]);
  };

  // Hide column functionality (Requirement 6)
  const hideColumn = (columnKey) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.key === columnKey ? { ...col, visible: false } : col
      )
    );
    setShowColumnMenu(null);
  };

  // Show hidden column (Requirement 7)
  const showColumn = (columnKey) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.key === columnKey ? { ...col, visible: true } : col
      )
    );
    setShowAddColumnMenu(false);
  };

  const getAvatarColor = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-emerald-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-red-500",
      "bg-orange-500",
      "bg-green-500",
      "bg-cyan-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  useEffect(() => {
    if (editingCell && editInputRef.current) {
      editInputRef.current.focus();
      editInputRef.current.select();
    }
  }, [editingCell]);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header - Fixed at top */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 h-16 flex items-center flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <Grid3X3 className="w-5 h-5 text-gray-600" />
            <h1 className="text-lg font-medium text-gray-900">Test Project</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Plus className="w-5 h-5 text-gray-500 cursor-pointer" />
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <Mail className="w-5 h-5 text-gray-500 cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
            <div className="w-px h-6 bg-gray-300"></div>
            <Moon className="w-5 h-5 text-gray-500 cursor-pointer" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Fixed height */}
        <aside className="w-60 bg-white border-r border-gray-200 h-screen overflow-y-auto flex-shrink-0">
          <div className="p-4">
            {/* CRM Header with chevron */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">CRM</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronDown className="w-4 h-4 rotate-180" />
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-8 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <MoreHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1">
              {[
                { name: "Dashboard", icon: Home, active: false },
                { name: "Office Check-in", icon: CheckSquare, active: false },
                { name: "Enquiries", icon: FileText, active: false },
                { name: "Clients", icon: Users, active: true },
                { name: "Services", icon: Settings, active: false },
                { name: "Quotation", icon: FileX, active: false },
                { name: "Tasks", icon: Calendar, active: false },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm ${
                    item.active
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <MoreHorizontal className="w-4 h-4 ml-auto text-gray-400" />
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content - Fixed height to prevent outer scrolling */}
        <main className="flex-1 h-screen overflow-hidden">
          {/* Page Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Clients</h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Branch(Kathmandu)</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
                <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer ml-2" />
              </div>
            </div>
          </div>

          <div className="p-6 h-full overflow-y-auto">
            {/* Filters Row */}
            <div className="flex items-center space-x-3 mb-6 flex-shrink-0">
              <div className="relative flex-1 max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search Particular"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter by assigned</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <Calendar className="w-4 h-4" />
                <span>Date</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <CheckSquare className="w-4 h-4" />
                <span>Status</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort</span>
              </button>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                <Save className="w-4 h-4" />
                <span>Saved Filter</span>
              </button>

              <button className="text-blue-600 text-sm hover:text-blue-800 px-3 py-2">
                Clear
              </button>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <button
                onClick={addNewClient}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>New Client</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-6 text-sm">
                <span className="text-gray-600">Prospects(18)</span>
                <span className="text-gray-900 font-medium">
                  Clients({clients.length})
                </span>
                <span className="text-gray-600">Archived(0)</span>
              </div>
            </div>

            {/* Table - Fixed scrolling to be ONLY within table */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] min-h-[400px]">
                <table className="w-full min-w-[1200px]">
                  <thead className="bg-white border-b border-gray-200 sticky top-0">
                    <tr>
                      <th className="w-12 px-4 py-3 text-left">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 rounded border-gray-300"
                        />
                      </th>
                      {visibleColumns.map((column) => (
                        <th
                          key={column.key}
                          className="px-4 py-3 text-left text-sm font-medium text-gray-900"
                          style={{ minWidth: column.width }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span>{column.label}</span>
                              <div className="flex flex-col">
                                <ArrowUp className="w-3 h-3 text-gray-400 -mb-1" />
                                <ArrowDown className="w-3 h-3 text-gray-400" />
                              </div>
                            </div>
                            <div className="relative">
                              <button
                                onClick={() =>
                                  setShowColumnMenu(
                                    showColumnMenu === column.key
                                      ? null
                                      : column.key
                                  )
                                }
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <MoreVertical className="w-4 h-4 text-gray-400" />
                              </button>
                              {showColumnMenu === column.key && (
                                <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                                  <button
                                    onClick={() => hideColumn(column.key)}
                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                                  >
                                    Hide Column
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </th>
                      ))}
                      <th className="px-4 py-3 text-left min-w-[120px]">
                        <div className="relative">
                          <button
                            onClick={() =>
                              setShowAddColumnMenu(!showAddColumnMenu)
                            }
                            className="text-blue-600 text-sm hover:text-blue-800 font-medium"
                          >
                            + Add Column
                          </button>
                          {showAddColumnMenu && hiddenColumns.length > 0 && (
                            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                              <div className="p-2">
                                <div className="text-sm font-medium text-gray-700 mb-2 px-2">
                                  Hidden Columns
                                </div>
                                {hiddenColumns.map((column) => (
                                  <button
                                    key={column.key}
                                    onClick={() => showColumn(column.key)}
                                    className="w-full px-2 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded"
                                  >
                                    {column.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300"
                          />
                        </td>
                        {visibleColumns.map((column) => (
                          <td
                            key={column.key}
                            className="px-4 py-4 text-sm cursor-pointer"
                            onClick={() =>
                              handleCellClick(client.id, column.key)
                            }
                            onDoubleClick={() =>
                              handleCellDoubleClick(client.id, column.key)
                            }
                            style={{ minWidth: column.width }}
                          >
                            {editingCell?.rowId === client.id &&
                            editingCell?.columnKey === column.key ? (
                              <input
                                ref={editInputRef}
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                onBlur={handleEditSubmit}
                                onKeyDown={(e) =>
                                  handleKeyDown(e, client.id, column.key)
                                }
                                className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                              />
                            ) : (
                              <div
                                className={`${
                                  selectedCell?.rowId === client.id &&
                                  selectedCell?.columnKey === column.key
                                    ? "bg-blue-50 border border-blue-300 rounded px-2 py-1 -mx-2 -my-1"
                                    : ""
                                }`}
                              >
                                {column.key === "name" ? (
                                  <div className="flex items-center space-x-3">
                                    <img
                                      src={
                                        userPhotos[client.name] ||
                                        userPhotos["New Client"]
                                      }
                                      alt={client.name}
                                      className="w-8 h-8 rounded-full object-cover"
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextElementSibling.style.display =
                                          "flex";
                                      }}
                                    />
                                    <div
                                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${getAvatarColor(
                                        client.name
                                      )} hidden`}
                                    >
                                      {getInitials(client.name)}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {client.name}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {client.email}
                                      </div>
                                    </div>
                                  </div>
                                ) : column.key === "assignee" ? (
                                  <div className="flex items-center space-x-2">
                                    <img
                                      src={
                                        assigneePhotos[client.assignee] ||
                                        assigneePhotos["Unassigned"]
                                      }
                                      alt={client.assignee}
                                      className="w-6 h-6 rounded-full object-cover"
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextElementSibling.style.display =
                                          "flex";
                                      }}
                                    />
                                    <div
                                      className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium ${getAvatarColor(
                                        client.assignee
                                      )} hidden`}
                                    >
                                      {getInitials(client.assignee)}
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium text-gray-900">
                                        {client.assignee}
                                      </div>
                                      <div className="text-xs text-gray-500">
                                        {client.assigneeRole}
                                      </div>
                                    </div>
                                  </div>
                                ) : column.key === "clientPortal" ? (
                                  <span className="text-sm text-gray-600">
                                    {client[column.key]}
                                  </span>
                                ) : (
                                  <span className="text-sm text-gray-900">
                                    {client[column.key]}
                                  </span>
                                )}
                              </div>
                            )}
                          </td>
                        ))}
                        <td className="px-4 py-4">
                          <MoreHorizontal className="w-4 h-4 text-gray-400" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
                <button className="text-blue-600 text-sm hover:text-blue-800 font-medium">
                  + Add Client's details
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CRMDashboard;
